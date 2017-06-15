package com.ressource;


import com.Entities.Subject;
import com.Entities.Team;
import com.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

//import org.springframework.security.access.annotation.Secured;

@RestController
public class SubjectResource {

    @Autowired
    private SubjectService subjectService;

    @GetMapping("/subjects")
    public List<Subject> retreiveAllSubjects()throws URISyntaxException {
        return subjectService.retreiveAllSubjects();
    }

    @GetMapping("/subject")
    public Integer getSubjectId( @RequestParam(value="subjectTitle", required=true) String subjectTitle)throws URISyntaxException {
      return subjectService.getSubjectId(subjectTitle);
    }

    @PostMapping("/subjectByTeam")
    public Subject retreiveSubjectByTeam(@RequestBody Team team)throws URISyntaxException {
      return subjectService.getSubject(team);
    }

    @PostMapping("/subject")
    public void createSubject(@RequestBody Subject subject) throws URISyntaxException {
        subjectService.createSubject(subject);
    }


    @PutMapping("/subject")
    public void updateSubject(@RequestBody Subject subject) throws URISyntaxException {
        subjectService.updateSubject(subject);
    }

    @PutMapping("/subjects")
    public void updateSubjects(@RequestBody ArrayList<Subject> subjects) throws URISyntaxException {
      subjectService.updateSubjects(subjects);
    }

    @PutMapping("/addTeamInSubject/{subjectId}")
    public void addTeamInSubject(@RequestBody Team team, @PathVariable Integer subjectId) throws URISyntaxException {
      subjectService.addTeamInSubject(team, subjectId);
    }

    @DeleteMapping("/subject/{id}")
    public void deleteSubject(@PathVariable Integer id) throws URISyntaxException {
        subjectService.deleteSubject(id);
    }
}
