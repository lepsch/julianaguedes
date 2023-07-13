const fs = require('fs/promises')
const path = require('path')
const { glob } = require('glob')

const PHP = `<?php
session_set_cookie_params(["SameSite" => "Strict"]);
session_start();

$host = $_SERVER['HTTP_HOST'];
if (substr($host, 0, 4) !== 'www.') {
  $host = 'www.' . $host;
  header('Location: https://' . $host . $_SERVER['REQUEST_URI'], true, 301);
  exit;
}
?>
`

const main = async () => {
  const result = await glob(path.join(__dirname, 'build', '**', 'index.html'))
  for (const file of result) {
    console.log('Patching file', file)
    /** @type {string} */
    const contents = await fs.readFile(file, 'utf8')
    await fs.writeFile(file, `${PHP}${contents}`)
    await fs.rename(file, file.replace('index.html', 'index.php'))
  }
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
