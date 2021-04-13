<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 基础表格
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" icon="el-icon-delete" class="handle-del mr10" @click="delAllSelection">
          批量删除
        </el-button>
        <el-select v-model="query.address" placeholder="地址" class="handle-select mr10">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" lable="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input v-model="query.name"></el-input>
      </div>
    </div>
    <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
      <el-table-column prop="name" label="用户名"></el-table-column>
      <el-table-column lable="账户余额">
        <template slot-scope="scope">
          ${{scope.row.money}}
        </template>
      </el-table-column>
      <el-table-column label="头像(查看大图)" algin="center">
        <template slot-scope="scope">
          <el-img class="table-td-thumb" :src="scope.row.thumb" :preview-src-list="[scope.row.thumb]"></el-img>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.state === '成功'?'success':(scope.row.state==='失败'?'danger':'')">{{scope.row.state}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>