package com.ressource;


import com.Entities.Team;
import com.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class TeamResource {
  @Autowired
  private TeamService teamService;

  @GetMapping("/teams")
  public List<Team> getAllTeams() {
    List<Team> t=teamService.getAllTeams();
    return t;
  }

  @GetMapping("/teams/{id}")
  public Team getAllTeams(@PathVariable Integer id) {
    return teamService.getOneTeam(id);
  }

  @GetMapping("/teamFromSubject/{subjectId}")
  public List<Team> getTeamFromSubject(@PathVariable Integer subjectId)throws URISyntaxException {
    return teamService.getTeamFromSubject(subjectId);
  }

  @GetMapping("/team/{clientId}")
  public List<Team> getTeamOfClient(@PathVariable Integer clientId)throws URISyntaxException{
    return teamService.getTeamOfClient(clientId);
  }

  @GetMapping("/teamId")
  public Integer getTeamId(@RequestParam(value = "teamName") String teamName)throws URISyntaxException{
    return teamService.getTeamId(teamName);
  }

  @PostMapping("/teams")
  public Team createTeam(@RequestBody Team team) throws URISyntaxException {
    return teamService.createTeam(team);
  }

  @PostMapping("/updateTeam")
  public Team updateOneTeam(@RequestBody Team team) throws URISyntaxException {
    return teamService.updateOneTeam(team);
  }

  @PutMapping("/teams")
  public void updateTeams(@RequestBody ArrayList<Team> teamList) throws URISyntaxException {
    teamService.updateTeams(teamList);
  }

  @DeleteMapping("/teams/{id}")
  public void deleteTeam(@PathVariable Integer id) throws URISyntaxException {
    teamService.deleteTeam(id);
  }

}
