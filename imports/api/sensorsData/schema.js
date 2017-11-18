import SimpleSchema from 'simpl-schema';

const TableDataSchema = new SimpleSchema({
  name: {
    type: String,
  },
});

export {
  TableDataSchema,
};
