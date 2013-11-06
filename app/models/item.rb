class Item < ActiveRecord::Base
  belongs_to :menu
  attr_accessible :name, :price
  validates :name, :presence => true, :uniqueness =>true
end
