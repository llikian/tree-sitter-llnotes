package tree_sitter_llnotes_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_llnotes "github.com/llikian/tree-sitter-llnotes/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_llnotes.Language())
	if language == nil {
		t.Errorf("Error loading llikian's notes grammar")
	}
}
