# Input string.
value = "katrin"

# Use tr to translate one alphabet to another.
value.tr!("abcdefghijklmnopqrstuvwxyz",
          "nopqrstuvwxyzabcdefghijklm")

# Our result.
puts value

# ohne Aufrufezeichen geht doch auch
value.tr("abcdefghijklmnopqrstuvwxyz", "nopqrstuvwxyzabcdefghijklm")
puts value

value.tr("a-y", "b-z")
puts value
