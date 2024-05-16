CREATE TABLE things(
    id serial PRIMARY KEY,
    apdated_at timestamp NOT NULL DEFAULT current_timestamp,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    body text NOT NULL CHECK (body !='')
);

-- INSER INTO things (body) VALUES ('Hello backend');