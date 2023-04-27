let psl = require('psl');

function removeSubdomain(url) {
    console.log("🚀 ~ file: index.js:4 ~ removeSubdomain ~ url:", url)
    let domain = psl.get(url)
    let parsed = psl.parse(domain);
    console.log("🚀 ~ file: index.js:8 ~ removeSubdomain ~ parsed:", parsed.domain + '\n')
    return parsed.domain
}

removeSubdomain('wordpress.proen.app.ruk-com.cloud');
removeSubdomain('play.google.com');
removeSubdomain('www.sit.kmutt.ac.th');