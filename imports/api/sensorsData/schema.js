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
  token: {
    type: String,
  },
});

const currentDataSchema = new SimpleSchema({
  sensor: {
    type: String,
  },
  userName: {
    type: String,
  },
  token: {
    type: String,
  },
});

export {
  TableDataSchema,
  currentDataSchema,
};
