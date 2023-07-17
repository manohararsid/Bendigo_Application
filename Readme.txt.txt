Configuration done for Bendigo Application run :

1.In the wdio.conf.ts file I gave timeouts as 60000
2.Browser : Chrome
3.Framework : Cucumber
4.Services as Chromedriver
5.base URL : Local host.
and spec and feature files are defined to run.


6.In the file Bendigo_appication_steps I mentioned the step methods.
7.In the Bendigo_applcation.ts file I mentioned each functional page as one method. 

Finally after cloning the project - command to run the feature is npx wdio .\wdio.conf.ts