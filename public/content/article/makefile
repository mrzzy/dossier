#
# makefile
# Dossier
# Makefile for Preprocessing Blog entries
# for viewing on site
#

.PHONY: clean all
.DEFAULT: all

TARGETS := entry manifest.json

all: $(TARGETS)

entry:
	perl scripts/preprocess_entries.pl

manifest.json:
	perl scripts/make_manifest.pl

clean:
	rm -rf $(TARGETS)
