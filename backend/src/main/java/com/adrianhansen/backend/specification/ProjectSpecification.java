package com.adrianhansen.backend.specification;

import com.adrianhansen.backend.entitiy.Project;
import com.adrianhansen.backend.entitiy.Skill;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class ProjectSpecification {
    private ProjectSpecification() {
    }

    public static Specification<Project> nameLike(String nameLike){
        return ((root, query, builder) -> builder.like(root.get("name"), "%" + nameLike +"%"));
    }

    public static Specification<Project> containsSkills(List<String> skills){
        return ((root, query, builder) -> {
            Join<Project, Skill> skillsOfProject = root.join("skills", JoinType.INNER);
            return skillsOfProject.get("name").in(skills);
        });
    }

}
