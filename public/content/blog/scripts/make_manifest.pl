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
my $FILTER_REGEX = qr/[_#`*{}]/;
 
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
    $feed =~ s/${FILTER_REGEX}//g;
    $feed =~ s/^\s*(.*)\s*$/$1/g;

    return $feed;
}

## Metadata Extraction
# Extract a table of contents listing infomation from the given markdown contents
# Each listing of the contents will be a hash of id, title and level
# Returns a reference to the extracted listing
sub extract_contents_listing 
{
    my ($contents) = @_;
    
    # Extract table of contents listing by extracting first and second level headers
    my @listing = ();
    for my $line(@{$contents}) 
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
            push @listing, \%listing;
        }
    }
    
    return \@listing;
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
    
    # Extract entry table of contnts
    my $listing = &extract_contents_listing(\@contents);

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
        "listing" => $listing
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
