# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rooms = [
  {
    slug: "firepit",
    name: "Fogueira",
    url: "",
  },
  {
    slug: "sound",
    name: "Músicas",
    url: "",
  },
  {
    slug: "tent-green",
    name: "Barraca Verde e Branco",
    url: "",
  },
  {
    slug: "tent-blue",
    name: "Barraca Azul e Roxo",
    url: "",
  },
  {
    slug: "tent-purple",
    name: "Barraca Lilás e Branco",
    url: "",
  },
  {
    slug: "tent-red",
    name: "Barraca Vermelha e Amarela",
    url: "",
  },
]

rooms.each do |data|
  Room.create(**data)
end
