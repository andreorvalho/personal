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

1. Notes
2. Currency
3. Exchange rates
4. Investments

1.1. As a user I would like to copy text from another notes system which is formatted and save it into a rails database so I can save old messages.

1.2. As a user I would like to create new notes so I can save information.

1.3. As a user I would like to edit new notes so I can change the information.

1.4. As a user I would to see an overview of notes.

1.5. As a user I would like to be able to soft delete notes. So I can hide tem from the overview.
