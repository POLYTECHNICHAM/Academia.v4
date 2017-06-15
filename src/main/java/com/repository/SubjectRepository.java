package com.repository;

import com.Entities.Subject;
import com.Entities.Team;
import org.springframework.data.repository.CrudRepository;

public interface SubjectRepository extends CrudRepository<Subject,Integer> {

    Subject findOneById(int id);
    Subject findSubjectsByTeamByTeamId(Team team);
    //Integer findSubjectsByIdLike(String subjectName);
    Subject findSubjectsByTitleLike(String SubjectTitle);
}
