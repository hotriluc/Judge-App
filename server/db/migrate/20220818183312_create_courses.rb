class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses, id: :uuid do |t|
      t.string :title
      t.string :description
      t.references :owner, null: false, type: :uuid

      t.timestamps
    end
  end
end
