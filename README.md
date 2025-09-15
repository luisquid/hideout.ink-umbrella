# umbrella

A starter project to help you get setup with [IndieAuth](https://indieweb.org/IndieAuth),
[Micropub](https://indieweb.org/Micropub), [Webmentions](https://indieweb.org/Webmention),
and a simple site using [Eleventy](https://11ty.dev) as a static site generator.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/benjifs/umbrella)

## Setup

These are the required environment variables you will need to setup when creating
your site. If you use the "Deploy to Netlify" button above, you should be prompted
during the setup process to add them.

| Environment Variable | Description |
| --- | --- |
| `SECRET` | Random long string of characters |
| `PASSWORD_SECRET` | Password hashed with [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) |
| `GITHUB_TOKEN` | GitHub [Personal access token](https://github.com/benjifs/github-store#setup) |
| `NAME` | Name for your [`h-card`](https://indieweb.org/h-card) |

### `SECRET`
A random generated string which will be used to create the access token. You can generate it with:
- `openssl rand -hex 16`
- Generate a [random string](https://generate-random.org/string-generator)

### `PASSWORD_SECRET`
Your password hashed with [bcrypt](https://en.wikipedia.org/wiki/Bcrypt). To do so you can either:
- `htpasswd -bnBC 10 "" toomanysecrets | cut -d : -f 2` where "toomanysecrets" is the password
- Use [bcrypt.io](https://www.bcrypt.io/) to create the hash

### `GITHUB_TOKEN`
You need one of the following tokens to work with the contents API:
- [Personal access token (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) with the `repo` scope selected.
- [Fine-grained personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) for the repository you want access to with `Read and write` access to **Contents** and `Read` access to **Metadata**.

### `NAME`
Having a name as part of your [h-card](https://indieweb.org/h-card) is not required
and it is mostly here as an example of how to configure some `h-card` values.

## Usage

Once your site is deployed, you should be able to login with any of the many [Micropub Clients](https://indieweb.org/Micropub/Clients)
to allow you to post to your site.

A typical flow will look like this:

### Go to your preferred [Micropub Client](https://indieweb.org/Micropub/Clients)
![Screenshot showing the login page for sparkles with the URL umbrella.sploot.com typed in](/docs/1.png)

Most micropub clients should work but you could always start with the one I wrote: [sparkles](https://sparkles.sploot.com).

### Authenticate using your domain name
![Screenshot showing the page of barnacle which is this sites internal IndieAuth server](/docs/2.png)

Here you will type the password that you have hashed and stored in `PASSWORD_SECRET`.

### Choose a type of post to create
![Screenshot of the main dashboard of sparkles showing all the types of post you could create](/docs/3.png)

After you have authenticated, you should now be able to select a type of post. This
varies by micropub client.

### Create a new basic text post
![Screenshot of a test note being created inside the micropub client](/docs/4.png)

Creating a post should call your sites [Micropub Endpoint](https://indieweb.org/Micropub/Servers)
which is built in to this project and, if everything works as expected, should show
up on your site after it rebuilds on Netlify. This process can take anywhere from
a few seconds to a minute.

## Webmentions

Every time your site builds, by default it will check an RSS feed sorted by most
recently updated called `latest.xml`. During the build process it will check if
the latest item has already been sent a webmention and, if so, prevent it from
sending multiple webmentions to others on every build.

This site also stores it's own webmentions using [serverless-webmentions (marshmallow)](https://github.com/benjifs/serverless-webmentions)
which keeps them all part of the same project using [Netlify Blobs](https://docs.netlify.com/build/data-and-storage/netlify-blobs/).
These are fetched on every build and added to each post if it has received any
webmention.
