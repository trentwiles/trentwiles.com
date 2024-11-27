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