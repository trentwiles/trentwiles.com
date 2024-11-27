# trentwiles.com

## Installing

```shell
# Clone
git clone git@github.com:trentwiles/trentwiles.com.git

# Install Dependencies
npm i

# Create .env File
cp .env.example .env

# Add Github Personal Access token
echo 'GITHUB_API="..."' > .env

# Now you're ready to build!
```

## Building

```shell
git pull
npx @11ty/eleventy # outputs to _site
```

## Giving Caddy Server Permission

```
sudo groupadd webadmins

sudo usermod -a -G webadmins [YOUR_USERNAME]
sudo usermod -a -G webadmins caddy


sudo chown -R trent:webadmins /home/trent/trentwiles.com
sudo find /home/trent/trentwiles.com -type d -exec chmod 775 {} \;
```