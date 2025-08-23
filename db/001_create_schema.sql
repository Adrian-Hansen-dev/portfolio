-- delete tables and types if they already exist
DROP TABLE IF EXISTS includes;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS users;
DROP TYPE IF EXISTS academic_title_enum;



CREATE TABLE users
(
    id             SERIAL PRIMARY KEY,
    first_name     VARCHAR(100) NOT NULL,
    last_name      VARCHAR(100) NOT NULL,
    profession     VARCHAR(100),
    description    VARCHAR(400),
    github_link    VARCHAR(200),
    linked_in_link VARCHAR(200)
);

CREATE TABLE projects
(
    id             SERIAL PRIMARY KEY,
    name           VARCHAR(100) NOT NULL,
    description    VARCHAR(200),
    repo_link      VARCHAR(200),
    demo_link      VARCHAR(200),
    creation_date  DATE,
    user_id        INT          NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)

);

CREATE TABLE skills
(
    id               SERIAL PRIMARY KEY,
    user_id          INT          NOT NULL,
    name             VARCHAR(100) NOT NULL,
    skill_begin_date DATE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE

);

CREATE TABLE includes
(
    project_id INT NOT NULL,
    skill_id   INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects (id),
    FOREIGN KEY (skill_id) REFERENCES skills (id)
);