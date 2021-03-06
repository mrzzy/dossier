#
# preprocess_entries.pl
# Dossier
# Preprocess Article Entries to ensure that they render properly on the site
#

use warnings;
use strict;
use 5.010;

my $ARTICLE_PATH = '/content/article';

# Fix the attachment links in the markdown given markdown contents, so that the 
# markdown has its attachments (images) properly
# Return the fixed contents as an array
sub fix_attachment_links
{
    my ($contents) = @_;
    
    my @fixed_contents = ();
    for my $line(@{$contents}) {
        # Hardcoded regex targets boost notes markdown export format
        $line =~ s/attachments\/[-\w]*\/(\w+.\w+)/attachments\/$1/;
        $line =~ s/(attachments\/\w+.\w+)/$ARTICLE_PATH\/$1/g;
        push @fixed_contents, $line;
    }
    
    return @fixed_contents;
}

# Define article entries as all markdown files
my @entry_paths = <*.md>;
for my $path (@entry_paths) {
    # Read contents from entry
    open my $entry, "<", $path;
    my @contents = <$entry>;
    
    # Preprocess contents
    @contents = &fix_attachment_links(\@contents);
    my $pp_contents = join "", @contents;
    
    # create preprocessed entry folder if it does not already exist
    mkdir "entry" unless -d "entry";

    # Write proprocessed contents to new file
    my $pp_path = $path;
    $pp_path =~ s/(\w+)\.md$/entry\/$1\.md/g;
    open my $pp_entry, ">", $pp_path or die "could not open $pp_path";
    print $pp_entry $pp_contents;
}
