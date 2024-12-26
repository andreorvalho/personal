# README

## Sources:

https://bootrails.com/blog/rails-7-bootstrap-5-tutorial/ - bootstrap

https://gist.github.com/kirillshevch/1b52f711e66b064416d746f07e834c00 - rails new

http://amalrik.github.io/2019/03/14/settingup-rails6-rspec/ - Rspec

https://blog.dennisokeeffe.com/blog/2022-02-19-rails-7-using-react-with-esbuild - react

## Missing:


# Instalation

[![Ruby Style Guide](https://img.shields.io/badge/code_style-community-brightgreen.svg)](https://rubystyle.guide)

Ruby version 3.3.4
Rails 8

## MacOs

### database postgres

brew info postgres(version: 11.5)
brew install postgres

1. start postgres(https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)
```
psql postgres
```

2. check users
```
\du
```

3. set password for postgres user(if necessary)
```
\password postgres
```

4. add role

```
CREATE ROLE personal_development_user WITH LOGIN PASSWORD 'personal_development_password';
ALTER ROLE personal_development_user CREATEDB;
```

5. create db and run migrations:

```
bundle exec rake db:create
bundle exec rake db:migrate
```

### Rspec

bundle exec rails generate rspec:install

### start application

./bin/setup

## Features:
