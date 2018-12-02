#
# gen_manifest.pl
# Dossier
# Generate Blog manifest
# Manifest is used by the site to discover and obtain metadata about available
# entrys
#

use warnings;
use strict;
use 5.010;
use POSIX qw(strftime);

use JSON::PP;

my $BLOG_PATH = '/content/blog';
my $TEXT_FILTER_REGEX = qr/[_#`*{}]/;
 
## Utility Functionality
# Convert the given date to iso forma
sub convert_iso_date 
{
	my ($local_date) = @_;
	           
    # add a colon between the hour and minute part of the timezone
    my $tz = strftime("%z", localtime($local_date));
    $tz =~ s/(\d{2})(\d{2})/$1:$2/;
    
    # convert to iso format
    return strftime("%Y-%m-%dT%H:%M:%S", localtime($local_date)) . $tz;
}

# Extracts plain text by filter markdown special characters and removing
# leading and trailing whitespace
# Returns the extracted plaintext
sub filter_text
{
    my ($feed) = @_;
    chomp $feed;
    $feed =~ s/${TEXT_FILTER_REGEX}//g;
    $feed =~ s/^\s*(.*)\s*$/$1/g;

    return $feed;
}

# Filters out code blocks from the given markdown contents
# Returns the filtered contents array
sub filter_code_blocks
{
    my ($feed) = @_;
    $feed = join "", @{$feed};
    
    # Filter out code blocks delimited by 3 backticks
    my $filtrate = "";
    my @blocks = split /```/, $feed;
    # Select alternate content blocks
    for(my $i = 0; $i < @blocks; $i += 2) {
        $filtrate .= $blocks[$i];
    }

    my @filtered_contents = split /\n/, $filtrate;
    return \@filtered_contents;
}   

## Metadata Extraction
# Extract a table of contents listings infomation from the given markdown contents
# Each listing of the contents will be a hash of id, title and level
# Returns a reference to the extracted listing
sub extract_contents_listing 
{
    my ($content) = @_;
    # Preprocess content
    $content = &filter_code_blocks($content);
    
    # Extract table of contents listing by extracting first and second level headers
    my @contents_listing = ();
    for my $line(@{$content}) 
    {
        # Extract first ands second and third level headers for table of contents
        # only
        if($line =~ /^\s*#{1,3}[^#]/)
        {
            my $header = $line;
        
            # Compute level of header by counting hashtags
            my $hashtags = $header;
            $hashtags =~ s/[^#]//g;
            my $level = length $hashtags;

            # Clean headers of extranous characters to form title
            my $title = &filter_text($header);
        
            # Form identifier from title
            my $id = lc $title;
            $id =~ s/[^a-z]+/-/g;
    
            # Add listing to contents 
            my %listing = (
                "id" => $id,
                "title" => $title,
                "level" => $level
            );
            push @contents_listing, \%listing;
        }
    }
    
    return \@contents_listing;
}

# Extract metadata for the blog entry at the given path
# Returns the extracted metadata as a referene to hash
sub extract_metadata 
{
    my ($path) = @_;

    # Determine entry timestamp
    my $mod_time = (stat($path))[9];
    my $timestamp =  &convert_iso_date($mod_time);
    
    # Read entry content
    open(my $entry, '<', $path);
    my @contents = <$entry>;

    # Extract entry title
    my $title = $contents[0];
    $title = &filter_text($title);
    
    # Extract entry subtitle
    my $subtitle = $contents[1];
    $subtitle = &filter_text($subtitle);
    
    # Extract entry table of contents
    my $contents_listing = &extract_contents_listing(\@contents);

    # Extract entry identifier from path
    my $id = $path;
    $id =~ s/\W*(\w+).*/$1/g;
    $id =~ s/[ _]/-/g;
    
    # Build reference to href for post. 
    # href references the preprocessed version
    my $href = $path;
    $href =~ s/(\w+)\.md$/${BLOG_PATH}\/entry\/$1\.md/;
    
    # Build metadata, to manifest
    my $metadata = {
        "id" => $id,
        "timestamp" => $timestamp,
        "title" => $title,
        "subtitle" => $subtitle,
        "href" => $href,
        "contents" => $contents_listing
    };

    return $metadata;
}

# Define entrys as all markdown files
my @entry_paths = <*.md>;
my @manifest = ();
for my $path (@entry_paths) {
    # Build manifest
    my $metadata = &extract_metadata($path);
    push @manifest, $metadata;
}


# Output manifest to file 
my $manifest_json = encode_json \@manifest;
open(my $manifest_file, ">", "manifest.json");
print $manifest_file $manifest_json;
