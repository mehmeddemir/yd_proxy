var targets = [
    "www.digitec.ch",
    "digitec.zendesk.com",
    "erp.digitecgalaxus.ch",
    "confdg.atlassian.net",
    "mytime.digitecgalaxus.ch",
    "operation.notimeapi.com",
    "www.post.ch",
    "planzer-paket.ch",
    "login.microsoft.com",
    "erp.galaxus.eu",
    "login.microsoftonline.com"
]

function FindProxyForURL(url, host) {
    for (var t of targets) {
        if (shExpMatch(host, t)) {
            return "PROXY 10.8.120.1:3128";
        }
    }

    return "DIRECT";
}
