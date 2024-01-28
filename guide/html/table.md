# Table

## Attributes
abbr: string

Contains a short abbriviated description of the cell's content.
colspan: Int

A non-negative integer thati indicates for how many columns the cell extends.
Defualt 1.
Values higher than 1000 will be considered as incorrect and will be set to the default value 1.
headers

A list of space-sparated strings.
rowspan

A non-negative integer that indicates for how many rows the cell extends.

Defualt 1.

If its value is set to 0, it extends util the end of the table section that the cell belongs to.
scope: row | col | rowgroup | colgroup | auto

row: the header relates to all the cells of the row it belongs to

colspan: int

Indicates for how many columns the cell extends.

Default 1

headers

A list of space-separated strings

rowspan: int

How may rows the cell extends.

Defualt 1.

If its value is set to 0, it extends until the end of the table section that the cell belongs to.
