Structure.create(description: "```[1, 2, 3, 4, 5]```")
Structure.create(description: "```{'McDermott, O'Reilly and Orn'=>'generate integrated niches',
 'Okuneva LLC'=>'transition ubiquitous channels',
 'Glover Group'=>'utilize interactive metrics',
 'Williamson, Stamm and Smitham'=>'incubate plug-and-play content',
 'Davis, Kihn and Ortiz'=>'scale 24/7 vortals',
 'Steuber-Kautzer'=>'benchmark revolutionary experiences',
 'Schulist LLC'=>'envisioneer rich infrastructures',
 'Kutch-Krajcik'=>'maximize killer bandwidth',
 'Murphy Inc'=>'transform revolutionary models',
 'Ondricka, Auer and Thiel'=>'embrace efficient platforms'}```")
Structure.create(description: "```[-952, -482, 115, [63, -475, 378], -412, -25, -240, [-736, 5, -407]]```")

5.times do
  array = Array.new
  10.times do
    array << rand(0..500)
  end
  Structure.create(description: "```" + array.to_s + "```")
end
