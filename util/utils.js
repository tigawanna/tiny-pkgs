const fs = require("fs");

function getDirectories(path) {
  return fs
    .readdirSync(path)
    .filter(function (file) {
      return fs
        .statSync(path + "/" + file)
        .isDirectory();
    });
}


const makeIndex=()=>{
  let export_files = `\n export {`
  let index = `import './index.css'\n`
  const a_dir_name = getDirectories('./src')
  for(let i=0;i<a_dir_name.length;i++){
    index += `import ${a_dir_name[i]} from "./${a_dir_name[i]}" \r`;
    export_files += `${a_dir_name[i]},`
  }
   export_files += `}`;

   return index+export_files
}


console.log(makeIndex());


