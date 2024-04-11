# PRG1-programming-task-directory-sort

Implement a sortFiles function that expects one string parameter 'directory' and
displays a list of all the files in the folder (i.e. directory)
ordered first by extension and then by name.

e.g., sortFiles('./Folder1')


Some tips:

Extract the file extension for each file using path.extname.

Sort the array of files. First, you sort by extension. If two files have the same extension, you then sort those by their filenames. 

Print the sorted list of filenames to the console.