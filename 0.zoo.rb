class Zoo
  attr_reader :enclosure

  def initialize(name)
    @name = name
    @enclosure = []
  end

  def add_animal(animal)
    @enclosure << animal
  end  

  def number_of_animals
    return @enclosure.length
  end  
end

class Animal
  attr_accessor :name 
  attr_reader :sound, :number_of_legs
  def initialize(name)
    @name = name
    @sound = "no sound"
    @number_of_legs = 4
    @lieblingsessen = "futter"
    @schlafzeit = 0
  end

  def make
    "#{@name} makes #{@sound}, eats #{@lieblingsessen} and sleeps #{@schlafzeit} hours!"
  end

  def to_s
    return "name: #{@name} is a #{self.class} \n makes #{@sound} \n eats #{@lieblingsessen} \n sleeps #{@schlafzeit} hours!" 
  end

end

class Dog < Animal
    def initialize(name)
      super           # Parent Klasse init
      @sound = "woof"
      @lieblingsessen = "nassfutter mit kaninchen"
      @schlafzeit = "12"
    end
end
  
class Lion < Animal
    def initialize(name)
      super           # Parent Klasse init
      @sound = "roar"
      @lieblingsessen = "schnitzel"
      @schlafzeit = "17"
    end
end

class Zebra < Animal
    def initialize(name)
      super           # Parent Klasse init
      @sound = "igogo"
      @lieblingsessen = "grass"
      @schlafzeit = "9"
    end
end
