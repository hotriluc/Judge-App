class AddOwnerToCourses < ActiveRecord::Migration[7.0]
  def change
    add_reference :courses, :owner, null: false, foreign_key: { to_table: :users }, type: :uuid
  end
end
