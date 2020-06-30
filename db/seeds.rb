# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

user1 = User.create(username: 'Esmeralda', password: '123456')
user2 = User.create(username: 'Antanneke', password: '123456')
user3 = User.create(username: 'Yaztromo', password: '123456')
user4 = User.create(username: 'demouser', password: '123456')

post1 = Post.create(title:'Packing up' , body:'Traveling with the essentials' , :user_id: user1.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/lifestyle.jpg')
post1.photo.attach(io: file, filename: 'lifestyle.jpg')

post2 = Post.create(title:'Chicgo Nights' , body:'Theaters and strolling through the city' , :user_id: user1.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/city1.jpg')
post2.photo.attach(io: file, filename: 'city1.jpg')

post3 = Post.create(title:'Empty Streets' , body:'Tokyo without the hussle' , :user_id: user1.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/city2.jpeg')
post3.photo.attach(io: file, filename: 'city2.jpeg')

post4 = Post.create(title:'Street spices' , body:'Unique spices I found on the street' , :user_id: user1.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/food3.jpg')
post4.photo.attach(io: file, filename: 'food3.jpg')

post5 = Post.create(title:'enSalada' , body:'Salad for the day' , :user_id: user1.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/food1.jpg')
post5.photo.attach(io: file, filename: 'food1.jpg')

post6 = Post.create(title:'Bloom' , body:'Flower spring' , :user_id: user2.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/micro1.jpg')
post6.photo.attach(io: file, filename: 'micro1.jpg')

post7 = Post.create(title:'Isolated' , body:'Stuck inside the frost' , :user_id: user2.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/micro2.jpg')
post7.photo.attach(io: file, filename: 'micro2.jpg')

post8 = Post.create(title:'Searching for Water' , body:'A bug reaches for the water' , :user_id: user2.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/micro3.jpg')
post8.photo.attach(io: file, filename: 'micro3.jpg')

post9 = Post.create(title:'Pollenation' , body:'Resting in food' , :user_id: user2.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/micro4.jpg')
post9.photo.attach(io: file, filename: 'micro4.jpg')

post10 = Post.create(title:'Bedtime Stories' , body:'Sunday Boudoir' , :user_id: user3.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/portrait1.jpg')
post10.photo.attach(io: file, filename: 'portrait1.jpg')

post11 = Post.create(title:'Golden Hour' , body:'Searching for thoughts' , :user_id: user3.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/portrait2.jpg')
post11.photo.attach(io: file, filename: 'portrait2.jpg')

post12 = Post.create(title:'Barbie Technicolor' , body:'Wheres my drink?' , :user_id: user3.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/portrait3.jpg')
post12.photo.attach(io: file, filename: 'portrait3.jpg')

post13 = Post.create(title:'Blue Horizons' , body:'Looking at the light at the end of the tunnel' , :user_id: user3.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/portrait4.jpg')
post13.photo.attach(io: file, filename: 'portrait4.jpg')

post14 = Post.create(title:'Flower Garden' , body:'Lay in hopes for dreams to come true' , :user_id: user3.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/portrait5.jpg')
post14.photo.attach(io: file, filename: 'portrait5.jpg')

post15 = Post.create(title:'Snow Valley' , body:'Yosemite Valley on a snowy morning' , :user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/landscape1.jpg')
post15.photo.attach(io: file, filename: 'landscape1.jpg')

post16 = Post.create(title:'Patagonia' , body:'A morning mist in Patagonia' , :user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/landscape2.jpg')
post16.photo.attach(io: file, filename: 'landscape2.jpg')

post17 = Post.create(title:'Surfs Up' , body:'Coastal rinse' , :user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/landscape4.jpg')
post17.photo.attach(io: file, filename: 'landscape4.jpg')

post18 = Post.create(title:'At Days End' , body:'Lake Tekapo' , :user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/landscape5.jpg')
post18.photo.attach(io: file, filename: 'landscape5.jpg')

post19 = Post.create(title:'Looking Down' , body:'The road ends where it began' , :user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/landscape3.jpg')
post91.photo.attach(io: file, filename: 'landscape3.jpg')

post20 = Post.create(title:'Califonia Dreaming' , body:'Blue skies and palm trees' , :user_id: user4.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/lifestyle.jpg')
post20.photo.attach(io: file, filename: 'lifestyle.jpg')

post21 = Post.create(title:'Tropical Mornings' , body:'Looking for another pineapple' , :user_id: user2.id)
file = open('https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/food2.jpg')
post21.photo.attach(io: file, filename: 'food2.jpg')