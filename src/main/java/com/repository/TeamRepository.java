package com.repository;

import com.Entities.Team;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TeamRepository extends CrudRepository<Team,Integer> {

    Team findOneById(int id);
    List<Team> findTeamsBySubjectBySubjectId_Id(int subjectId);
    List<Team> findTeamByPersons_Id(int clientId);
    Team findTeamsByNameLike(String teamName);


}
