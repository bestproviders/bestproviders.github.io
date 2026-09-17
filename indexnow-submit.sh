let make #!/bin/sh
# Push every URL in sitemap.xml to IndexNow (Bing, Yandex, Seznam, Naver).
# Google does NOT use IndexNow — for Google, submit the sitemap in Search Console.
# Usage: sh indexnow-submit.sh
set -e
KEY="beb8dbac8ddaa8c017d1244beaa63bb5"
HOST="bestproviders.github.io"
URLS=$(grep -o '<loc>[^<]*</loc>' sitemap.xml | sed 's|</\{0,1\}loc>||g')
JSON=$(printf '%s\n' "$URLS" | python3 -c "import sys,json;print(json.dumps({'host':'$HOST','key':'$KEY','keyLocation':'https://$HOST/$KEY.txt','urlList':[l.strip() for l in sys.stdin if l.strip()]}))")
echo "Submitting $(printf '%s\n' "$URLS" | wc -l | tr -d ' ') URLs to IndexNow..."
curl -sS -X POST "https://api.indexnow.org/IndexNow" -H "Content-Type: application/json; charset=utf-8" -d "$JSON" -w "\nHTTP %{http_code}\n"
