package com.service;

import com.Entities.Team;
import com.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service("Team")
public class TeamService {

  @Autowired
  private TeamRepository teamRepository;

  public List<Team> getAllTeams(){
    List<Team> teamsList = new ArrayList<>();
    teamRepository.findAll().forEach(teamsList::add);
    return teamsList;
  }

  public Team createTeam(Team team){
    return teamRepository.save(team);
  }

  public Team updateOneTeam(Team team){

    return teamRepository.save(team);
  }

  public void updateTeams(ArrayList<Team> teamList){

    for (Team oneTeam : teamList) {
      teamRepository.save(oneTeam);
    }
  }
  public Team getOneTeam(Integer id){

    return teamRepository.findOneById(id);
  }

  public List<Team> getTeamFromSubject(Integer subjectId){
    //List<Team> teamIdList = new ArrayList<>();
    return teamRepository.findTeamsBySubjectBySubjectId_Id(subjectId);
  }

  public List<Team> getTeamOfClient(Integer clientId){
    return teamRepository.findTeamByPersons_Id(clientId);
  }

  public Integer getTeamId(String teamName){
    Team team = teamRepository.findTeamsByNameLike(teamName);
    Integer teamId = team.getId();
    return teamId;
  }
  public Team getTeamOfStudent(Integer studentId){
    if(teamRepository.findTeamByPersons_Id(studentId).size()>0){
      return teamRepository.findTeamByPersons_Id(studentId).get(0);
    }else{
      Team t=new Team();
      t.setId(-1);
      return t;
    }
  }

  public void deleteTeam(Integer id){

    teamRepository.delete(id);
  }
}
