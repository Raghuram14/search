# Search

This is a master repo containing API to search details of the provided parameters

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for develope and testing purposes.

## Pre requisites

## Install Git

```bash
    sudo apt install git
```

## Install Node Dependencies

Install Node JS 18.*

```bash
    sudo apt update
    sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    sudo apt -y install nodejs
    sudo apt -y  install gcc g++ make
```

Install NPM 8.*

NPM is Automatically installed when you install node js if not please please install NPM.

```bash
    sudo apt install npm
```

## Import/Clone Project
Clone the project repo to your workspace

```bash
    git clone https://github.com/Raghuram14/search.git
```

## Install Project Dependencies
Install required npm packages for this project

```bash
    cd search
    sudo npm install
```


## Environment variable setup
To run this project, you will need to follow given instructions to set the environment variables.
   * Create local .env file
   * Copy sample-env file details to .env file to get started

## Start Server

```bash
    npm start
```