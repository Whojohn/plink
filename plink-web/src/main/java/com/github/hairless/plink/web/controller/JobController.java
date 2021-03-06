package com.github.hairless.plink.web.controller;

import com.github.hairless.plink.model.dto.JobDTO;
import com.github.hairless.plink.model.req.PageReq;
import com.github.hairless.plink.model.resp.Result;
import com.github.hairless.plink.model.resp.ResultCode;
import com.github.hairless.plink.service.JobService;
import com.github.pagehelper.PageInfo;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * job
 *
 * @Author Trevor
 * @Create 2020/1/14 14:19
 */

@RestController
@RequestMapping("/mng/job")
public class JobController {
    @Autowired
    private JobService jobService;

    /**
     * 添加作业
     *
     * @param jobDTO 作业请求对象
     */
    @RequestMapping("/addJob")
    public Result<JobDTO> addJob(@RequestBody JobDTO jobDTO) {
        JobDTO jobDTORes = jobService.addJob(jobDTO);
        return new Result<>(ResultCode.SUCCESS, jobDTORes);
    }

    /**
     * 批量删除作业
     *
     * @param idList 作业id列表
     */
    @RequestMapping(value = "/deleteJobs", method = RequestMethod.POST)
    public Result deleteJobs(@RequestBody List<Long> idList) {
        jobService.deleteJobs(idList);
        return new Result<>(ResultCode.SUCCESS);
    }

    /**
     * 删除作业
     *
     * @param jobId 作业id
     */
    @RequestMapping(value = "/deleteJob/{jobId}", method = RequestMethod.POST)
    public Result deleteJob(@PathVariable(value = "jobId") @NotNull Long jobId) {
        jobService.deleteJob(jobId);
        return new Result<>(ResultCode.SUCCESS);
    }

    /**
     * 编辑作业
     *
     * @param jobDTO 作业请求对象
     */
    @RequestMapping("/updateJob")
    public Result updateJob(@RequestBody @Valid JobDTO jobDTO) {
        jobService.updateJob(jobDTO);
        return new Result<>(ResultCode.SUCCESS);
    }

    /**
     * 查询单个作业
     *
     * @param jobId 作业id
     */
    @RequestMapping("/queryJob/{jobId}")
    public Result<JobDTO> queryJob(@PathVariable(value = "jobId") @NotNull Long jobId) {
        JobDTO jobDTO = jobService.queryJob(jobId);
        return new Result<>(ResultCode.SUCCESS, jobDTO);
    }

    /**
     * 查询作业列表
     */
    @RequestMapping("/queryJobs")
    public Result<PageInfo<JobDTO>> queryJobs(JobDTO jobDTO, PageReq pageReq) {
        PageInfo<JobDTO> jobDTOPageInfo = jobService.queryJobs(jobDTO, pageReq);
        return new Result<>(ResultCode.SUCCESS, jobDTOPageInfo);
    }

    /**
     * 作业上传jar
     */
    @RequestMapping("{jobId}/uploadJar")
    public Result uploadJar(@PathVariable(value = "jobId") @NotNull Long jobId, @RequestParam("file") MultipartFile file) {
        jobService.uploadJar(jobId, file);
        return new Result<>(ResultCode.SUCCESS);
    }

    /**
     * 作业获取jar列表
     */
    @RequestMapping("{jobId}/jarList")
    public Result jarList(@PathVariable(value = "jobId") @NotNull Long jobId) {
        return new Result<>(ResultCode.SUCCESS, jobService.jarList(jobId));
    }

    /**
     * 作业启动接口
     *
     * @param jobId 作业id
     */
    @RequestMapping(value = "/startJob/{jobId}")
    public Result startJob(@PathVariable(value = "jobId") @NonNull Long jobId) {
        jobService.startJob(jobId);
        return new Result<>(ResultCode.SUCCESS);
    }

    /**
     * 作业批量启动接口
     *
     * @param idList 作业id列表
     */
    @RequestMapping(value = "/startJobs")
    public Result startJobs(@RequestBody @NonNull List<Long> idList) {
        jobService.startJobs(idList);
        return new Result<>(ResultCode.SUCCESS);
    }

    /**
     * 作业停止接口
     *
     * @param jobId 作业id
     */
    @RequestMapping(value = "/stopJob/{jobId}")
    public Result stopJob(@PathVariable(value = "jobId") @NonNull Long jobId) {
        jobService.stopJob(jobId);
        return new Result<>(ResultCode.SUCCESS);
    }

    /**
     * 作业批量停止接口
     *
     * @param idList 作业id列表
     */
    @RequestMapping(value = "/stopJobs")
    public Result stopJobs(@RequestBody @NotNull List<Long> idList) {
        jobService.stopJobs(idList);
        return new Result<>(ResultCode.SUCCESS);
    }

    /**
     * 作业重启接口
     *
     * @param jobId 作业id
     */
    @RequestMapping(value = "/reStartJob/{jobId}")
    public Result reStartJob(@PathVariable(value = "jobId") @NonNull Long jobId) {
        jobService.reStartJob(jobId);
        return new Result<>(ResultCode.SUCCESS);
    }

    /**
     * 作业批量重启接口
     *
     * @param idList 作业id列表
     */
    @RequestMapping(value = "/reStartJobs")
    public Result reStartJob(@RequestBody @NonNull List<Long> idList) {
        jobService.reStartJobs(idList);
        return new Result<>(ResultCode.SUCCESS);
    }


}
