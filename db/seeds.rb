# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Post.destroy_all
Like.destroy_all

user1 = User.create!(username: 'Esmeralda', password: '123456')
user2 = User.create!(username: 'Antanneke', password: '123456')
user3 = User.create!(username: 'Yaztromo', password: '123456')
user4 = User.create!(username: 'demouser', password: '123456')

post1 = Post.new(title:'Packing up' , body:'Traveling with the essentials' , user_id: user1.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/lifestyle.jpg')
post1.photo.attach(io: file, filename: 'lifestyle.jpg')
post1.save!

post2 = Post.new(title:'Chicago Nights' , body:'Theaters and strolling through the city' , user_id: user1.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/city1.jpg')
post2.photo.attach(io: file, filename: 'city1.jpg')
post2.save!

post3 = Post.new(title:'Empty Streets' , body:'Tokyo without the hussle' , user_id: user1.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/city2.jpeg')
post3.photo.attach(io: file, filename: 'city2.jpeg')
post3.save!

post4 = Post.new(title:'Street spices' , body:'Unique spices I found on the street' , user_id: user1.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/food3.jpg')
post4.photo.attach(io: file, filename: 'food3.jpg')
post4.save!

post5 = Post.new(title:'enSalada' , body:'Salad for the day' , user_id: user1.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/food1.jpg')
post5.photo.attach(io: file, filename: 'food1.jpg')
post5.save!

post6 = Post.new(title:'Bloom' , body:'Flower spring' , user_id: user2.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/micro1.jpeg')
post6.photo.attach(io: file, filename: 'micro1.jpeg')
post6.save!

post7 = Post.new(title:'Isolated' , body:'Stuck inside the frost' , user_id: user2.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/micro2.jpeg')
post7.photo.attach(io: file, filename: 'micro2.jpeg')
post7.save!

post8 = Post.new(title:'Searching for Water' , body:'A bug reaches for the water' , user_id: user2.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/micro3.jpeg')
post8.photo.attach(io: file, filename: 'micro3.jpeg')
post8.save!

post9 = Post.new(title:'Pollenation' , body:'Resting in food' , user_id: user2.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/micro4.jpg')
post9.photo.attach(io: file, filename: 'micro4.jpg')
post9.save!

post10 = Post.new(title:'Bedtime Stories' , body:'Sunday Boudoir' , user_id: user3.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/portrait1.jpg')
post10.photo.attach(io: file, filename: 'portrait1.jpg')
post10.save!

post11 = Post.new(title:'Golden Hour' , body:'Searching for thoughts' , user_id: user3.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/portrait2.jpg')
post11.photo.attach(io: file, filename: 'portrait2.jpg')
post11.save!

post12 = Post.new(title:'Barbie Technicolor' , body:'Wheres my drink?' , user_id: user3.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/portrait3.jpg')
post12.photo.attach(io: file, filename: 'portrait3.jpg')
post12.save!

post13 = Post.new(title:'Blue Horizons' , body:'Looking at the light at the end of the tunnel' , user_id: user3.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/portrait4.jpg')
post13.photo.attach(io: file, filename: 'portrait4.jpg')
post13.save!

post14 = Post.new(title:'Flower Garden' , body:'Lay in hopes for dreams to come true' , user_id: user3.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/portrait5.jpg')
post14.photo.attach(io: file, filename: 'portrait5.jpg')
post14.save!

post15 = Post.new(title:'Snow Valley' , body:'Yosemite Valley on a snowy morning' , user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/landscape1.jpeg')
post15.photo.attach(io: file, filename: 'landscape1.jpeg')
post15.save!

post16 = Post.new(title:'Patagonia' , body:'A morning mist in Patagonia' , user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/landscape2.jpg')
post16.photo.attach(io: file, filename: 'landscape2.jpg')

post17 = Post.new(title:'Surfs Up' , body:'Coastal rinse' , user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/landscape4.jpg')
post17.photo.attach(io: file, filename: 'landscape4.jpg')
post17.save!

post18 = Post.new(title:'At Days End' , body:'Lake Tekapo' , user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/landscape5.jpg')
post18.photo.attach(io: file, filename: 'landscape5.jpg')
post18.save!

post19 = Post.new(title:'Looking Down' , body:'The road ends where it began' , user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/landscape3.jpg')
post19.photo.attach(io: file, filename: 'landscape3.jpg')
post19.save!

post20 = Post.new(title:'Califonia Dreaming' , body:'Blue skies and palm trees' , user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/tropical.jpg')
post20.photo.attach(io: file, filename: 'tropical.jpg')
post20.save!

post21 = Post.new(title:'Tropical Mornings' , body:'Looking for another pineapple' , user_id: user2.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/food2.jpg')
post21.photo.attach(io: file, filename: 'food2.jpg')
post21.save!

like1 = Like.new(user_id: user4.id, post_id: post13)
like1.save!

like2 = Like.new(user_id: user4.id, post_id: post9)
like2.save!

like3 = Like.new(user_id: user4.id, post_id: post2)
like3.save!

like4 = Like.new(user_id: user4.id, post_id: post8)
like4.save!

like5 = Like.new(user_id: user4.id, post_id: post21)
like5.save!

like6 = Like.new(user_id: user4.id, post_id: post12)
like6.save!

like7 = Like.new(user_id: user4.id, post_id: post10)
like7.save!