#
# gen_manifest.pl
# Dossier
# Generate manifest
#

use warnings;
use strict;
use 5.010;
use POSIX qw(strftime);

use JSON::PP;
 
# Convert the given date to iso forma
sub convert_iso_date {
	my ($local_date) = @_;
	           
    # add a colon between the hour and minute part of the timezone
    my $tz = strftime("%z", localtime($local_date));
    $tz =~ s/(\d{2})(\d{2})/$1:$2/;
    
    # convert to iso format
    return strftime("%Y-%m-%dT%H:%M:%S", localtime($local_date)) . $tz;
}

# Build manifest
my @manifest = ();
# Define posts as all markdown files
my @post_paths = <*.md>;
for my $path (@post_paths) {
    # Determine post timestamp
    my $mod_time = (stat($path))[9];
    my $timestamp =  &convert_iso_date($mod_time);
    
    # Read post content
    open(my $post, '<', $path);
    my @contents = <$post>;
    # Extract post title
    my $title = $contents[0];
    chomp $title;
    $title =~ s/\W*([-\w?,.! ]+)\W*/$1/g;
    # Extract post subtitle
    my $subtitle = $contents[1];
    chomp $subtitle;
    $subtitle =~ s/\W*([-\w?,.! ]+)\W*/$1/g;

    # Add metadata to manifest
    my %metadata = (
        "timestamp" => $timestamp,
        "title" => $title,
        "subtitle" => $subtitle,
        "path" => "/content/blog/" . $path
    );
    
    push @manifest, \%metadata;
}

# Output manifest to file 
my $manifest_json = encode_json \@manifest;
open(my $manifest_file, ">", "manifest.json");
print $manifest_file $manifest_json;
