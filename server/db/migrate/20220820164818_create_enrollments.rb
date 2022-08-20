class CreateEnrollments < ActiveRecord::Migration[7.0]
  def change
    create_table :enrollments, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :course, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
