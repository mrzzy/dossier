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

my $BLOG_PATH = '/content/blog/entry';
my $TITLE_REGEX = qr/([-\w?,.\/!:() ]+)/;
 
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

## Metadata Extraction
# Extract a table of contents array from the given markdown contents
# Returns a refreence to the extracted table of contents
sub extract_contents_table 
{
    my ($contents) = @_;
    
    # Extract table of contents by extracting first and second level headers
    my @contents_table = ();
    for my $line(@{$contents}) 
    {
        # Check for first and second level headers
        if($line =~ /^#{1,2}[^#]+$/)
        {
            my $header = $line;
            # Clean headers of extranous characters
            chomp $header;
            $header =~ s/^#{1,2}\W*${TITLE_REGEX}\W*$/$1/;
        
            # Add cleaned header to table of contents
            push @contents_table, $header;
        }
    }
    
    return \@contents_table;
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
    chomp $title;
    $title =~ s/\W*${TITLE_REGEX}\W*/$1/g;
    
    # Extract entry subtitle
    my $subtitle = $contents[1];
    chomp $subtitle;
    $subtitle =~ s/\W*${TITLE_REGEX}\W*/$1/g;
    
    # Extract entry table of contnts
    my $contents_table = &extract_contents_table(\@contents);

    # Extract entry identifier from path
    my $id = $path;
    $id =~ s/\W*(\w+).*/$1/g;
    
    # Build reference to href for post. 
    # href references the preprocessed version
    my $href = $path;
    $href =~ s/(\w+)\.md$/${BLOG_PATH}\/$1\.md/;
    
    # Build metadata, to manifest
    my $metadata = {
        "id" => $id,
        "timestamp" => $timestamp,
        "title" => $title,
        "subtitle" => $subtitle,
        "href" => $href,
        "contents_table" => $contents_table
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
