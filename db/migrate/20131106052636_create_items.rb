class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.belongs_to :menu
      t.string :name
      t.integer :price
      t.timestamps
    end
  end
end