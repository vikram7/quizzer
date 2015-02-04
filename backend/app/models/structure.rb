class Structure < ActiveRecord::Base
    validates :description, presence: true, uniqueness: true
    validates :findable, presence: true, uniqueness: true
end
