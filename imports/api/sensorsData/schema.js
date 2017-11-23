import SimpleSchema from 'simpl-schema';

const TableDataSchema = new SimpleSchema({
  baseUrl: {
    type: String,
  },
  roomId: {
    type: String,
  },
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  sensor: {
    type: String,
  },
  query: {
    type: String,
  },
  className: {
    type: String,
  },
  isLive: {
    type: Boolean,
  },
  period: {
    type: String,
    optional: true,
  },
});

export {
  TableDataSchema,
};
