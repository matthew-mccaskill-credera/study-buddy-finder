package study.buddy.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class StudyBuddyApplication {
    public static void main(String[] args) {
        SpringApplication.run(StudyBuddyApplication.class, args);
    }
}
