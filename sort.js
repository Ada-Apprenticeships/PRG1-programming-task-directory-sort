const fs = require('fs');

// Implement a sortFiles function that expects one string parameter 'directory' and
// displays a list of all the files in the folder (i.e. directory)
// ordered first by extension and then by name.
//
// e.g., sortFiles('./Folder1')


function sortFiles(directory) {
  // Read the contents of the directory synchronously
  let files;
  try {
    files = fs.readdirSync(directory);
  } catch (err) {
    console.error("Error reading directory", err);
    return;
  }

  // Display the files
  files.forEach(file => {
    console.log(file);
  });
}

sortFiles('./Folder1');