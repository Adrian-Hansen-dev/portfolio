ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
    ON users
    FOR SELECT
    USING (true);

-- disable mutation
REVOKE INSERT, UPDATE, DELETE ON users FROM anon, authenticated;
