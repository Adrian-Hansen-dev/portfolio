package com.adrianhansen.backend.entitiy;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "skills")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "skill_begin_date")
    private Date skillBeginDate;

    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.REFRESH, CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.LAZY)
    @JoinTable(name = "includes", joinColumns = @JoinColumn(name = "skill_id"), inverseJoinColumns = @JoinColumn(name = "project_id"))
    private List<Project> projects;

    public Skill() {
    }

    public Skill(String name, Date skillBeginDate) {
        this.name = name;
        this.skillBeginDate = skillBeginDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getSkillBeginDate() {
        return skillBeginDate;
    }

    public void setSkillBeginDate(Date skillDate) {
        this.skillBeginDate = skillDate;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }
}
