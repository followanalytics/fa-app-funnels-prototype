export const completions = {
  "completions": [
    {
      "step": 0,
      "completions": 18224,
      "average_duration": 0,           // It's always 0 for step-0
      "last_completed_at": '...'   // ISO date-time in UTC
    },
    {
      "step": 1,
      "completions": 1224,
      "average_duration": 22335.24,    // Duration in (decimal) seconds
      "last_completed_at": '...'   // ISO date-time in UTC
    },
    {
      "step": 2,
      "completions": 503,
      "average_duration": 322335.24,    // Duration in (decimal) seconds
      "last_completed_at": '...'   // ISO date-time in UTC
    },
  ],
};

export const follow_ups = {
  "follow_ups": [
    {
      "app_id": 143,
      "log_type": 2,
      "log_name": "some_log_name",
      "completions": 1224,
      "average_duration": 2342335.24,  // this can be longer than the time limits of the funnel.
      "last_completed_at": '...'
    },
    {
      "app_id": 143,
      "log_type": 2,
      "log_name": "some_other_name",
      "completions": 1224,
      "average_duration": 22335.24,
      "last_completed_at": '...'
    }
  ],
};