import{_ as s,o as l,c as a,Q as n}from"./chunks/framework.ca65985f.js";const C=JSON.parse('{"title":"升级操作系统内核","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"k8s/optional-config.md","filePath":"k8s/optional-config.md","lastUpdated":1694656397000}'),e={name:"k8s/optional-config.md"},p=n(`<h1 id="升级操作系统内核" tabindex="-1">升级操作系统内核 <a class="header-anchor" href="#升级操作系统内核" aria-label="Permalink to &quot;升级操作系统内核&quot;">​</a></h1><h2 id="查看当前系统内核版本" tabindex="-1">查看当前系统内核版本 <a class="header-anchor" href="#查看当前系统内核版本" aria-label="Permalink to &quot;查看当前系统内核版本&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">uname</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">uname</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span></span></code></pre></div><h2 id="载入公钥" tabindex="-1">载入公钥 <a class="header-anchor" href="#载入公钥" aria-label="Permalink to &quot;载入公钥&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rpm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://www.elrepo.org/RPM-GPG-KEY-elrepo.org</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://www.elrepo.org/RPM-GPG-KEY-elrepo.org</span></span></code></pre></div><h2 id="安装elrepo" tabindex="-1">安装ELRepo <a class="header-anchor" href="#安装elrepo" aria-label="Permalink to &quot;安装ELRepo&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://www.elrepo.org/elrepo-release-7.el7.elrepo.noarch.rpm</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://www.elrepo.org/elrepo-release-7.el7.elrepo.noarch.rpm</span></span></code></pre></div><h2 id="查询已安装和可用的内核软件包" tabindex="-1">查询已安装和可用的内核软件包 <a class="header-anchor" href="#查询已安装和可用的内核软件包" aria-label="Permalink to &quot;查询已安装和可用的内核软件包&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--disablerepo=\\*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--enablerepo=elrepo-kernel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel</span><span style="color:#79B8FF;">*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--disablerepo=\\*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--enablerepo=elrepo-kernel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel</span><span style="color:#005CC5;">*</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[root@k8s-master-1 </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;">]# yum --disablerepo=</span><span style="color:#79B8FF;">\\*</span><span style="color:#E1E4E8;"> --enablerepo=elrepo-kernel list kernel</span><span style="color:#F97583;">*</span></span>
<span class="line"><span style="color:#B392F0;">Installed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Packages</span></span>
<span class="line"><span style="color:#B392F0;">kernel.x86_64</span><span style="color:#E1E4E8;">                                                              </span><span style="color:#79B8FF;">3.10</span><span style="color:#9ECBFF;">.0-1160.el7</span><span style="color:#E1E4E8;">                                               </span><span style="color:#9ECBFF;">@anaconda</span><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#B392F0;">kernel.x86_64</span><span style="color:#E1E4E8;">                                                              </span><span style="color:#79B8FF;">3.10</span><span style="color:#9ECBFF;">.0-1160.88.1.el7</span><span style="color:#E1E4E8;">                                          </span><span style="color:#9ECBFF;">@updates</span><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">kernel-devel.x86_64</span><span style="color:#E1E4E8;">                                                        </span><span style="color:#79B8FF;">3.10</span><span style="color:#9ECBFF;">.0-1160.88.1.el7</span><span style="color:#E1E4E8;">                                          </span><span style="color:#9ECBFF;">@updates</span><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">kernel-headers.x86_64</span><span style="color:#E1E4E8;">                                                      </span><span style="color:#79B8FF;">3.10</span><span style="color:#9ECBFF;">.0-1160.88.1.el7</span><span style="color:#E1E4E8;">                                          </span><span style="color:#9ECBFF;">@updates</span><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">kernel-tools.x86_64</span><span style="color:#E1E4E8;">                                                        </span><span style="color:#79B8FF;">3.10</span><span style="color:#9ECBFF;">.0-1160.88.1.el7</span><span style="color:#E1E4E8;">                                          </span><span style="color:#9ECBFF;">@updates</span><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">kernel-tools-libs.x86_64</span><span style="color:#E1E4E8;">                                                   </span><span style="color:#79B8FF;">3.10</span><span style="color:#9ECBFF;">.0-1160.88.1.el7</span><span style="color:#E1E4E8;">                                          </span><span style="color:#9ECBFF;">@updates</span><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">Available</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Packages</span></span>
<span class="line"><span style="color:#B392F0;">kernel-lt-devel.x86_64</span><span style="color:#E1E4E8;">                                                     </span><span style="color:#79B8FF;">5.4</span><span style="color:#9ECBFF;">.256-1.el7.elrepo</span><span style="color:#E1E4E8;">                                          </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-lt-doc.noarch</span><span style="color:#E1E4E8;">                                                       </span><span style="color:#79B8FF;">5.4</span><span style="color:#9ECBFF;">.256-1.el7.elrepo</span><span style="color:#E1E4E8;">                                          </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-lt-headers.x86_64</span><span style="color:#E1E4E8;">                                                   </span><span style="color:#79B8FF;">5.4</span><span style="color:#9ECBFF;">.256-1.el7.elrepo</span><span style="color:#E1E4E8;">                                          </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-lt-tools.x86_64</span><span style="color:#E1E4E8;">                                                     </span><span style="color:#79B8FF;">5.4</span><span style="color:#9ECBFF;">.256-1.el7.elrepo</span><span style="color:#E1E4E8;">                                          </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-lt-tools-libs.x86_64</span><span style="color:#E1E4E8;">                                                </span><span style="color:#79B8FF;">5.4</span><span style="color:#9ECBFF;">.256-1.el7.elrepo</span><span style="color:#E1E4E8;">                                          </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-lt-tools-libs-devel.x86_64</span><span style="color:#E1E4E8;">                                          </span><span style="color:#79B8FF;">5.4</span><span style="color:#9ECBFF;">.256-1.el7.elrepo</span><span style="color:#E1E4E8;">                                          </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-ml.x86_64</span><span style="color:#E1E4E8;">                                                           </span><span style="color:#79B8FF;">6.5</span><span style="color:#9ECBFF;">.1-1.el7.elrepo</span><span style="color:#E1E4E8;">                                            </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-ml-devel.x86_64</span><span style="color:#E1E4E8;">                                                     </span><span style="color:#79B8FF;">6.5</span><span style="color:#9ECBFF;">.1-1.el7.elrepo</span><span style="color:#E1E4E8;">                                            </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-ml-doc.noarch</span><span style="color:#E1E4E8;">                                                       </span><span style="color:#79B8FF;">6.5</span><span style="color:#9ECBFF;">.1-1.el7.elrepo</span><span style="color:#E1E4E8;">                                            </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-ml-headers.x86_64</span><span style="color:#E1E4E8;">                                                   </span><span style="color:#79B8FF;">6.5</span><span style="color:#9ECBFF;">.1-1.el7.elrepo</span><span style="color:#E1E4E8;">                                            </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-ml-tools.x86_64</span><span style="color:#E1E4E8;">                                                     </span><span style="color:#79B8FF;">6.5</span><span style="color:#9ECBFF;">.1-1.el7.elrepo</span><span style="color:#E1E4E8;">                                            </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-ml-tools-libs.x86_64</span><span style="color:#E1E4E8;">                                                </span><span style="color:#79B8FF;">6.5</span><span style="color:#9ECBFF;">.1-1.el7.elrepo</span><span style="color:#E1E4E8;">                                            </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">kernel-ml-tools-libs-devel.x86_64</span><span style="color:#E1E4E8;">                                          </span><span style="color:#79B8FF;">6.5</span><span style="color:#9ECBFF;">.1-1.el7.elrepo</span><span style="color:#E1E4E8;">                                            </span><span style="color:#9ECBFF;">elrepo-kernel</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">[root@k8s-master-1 </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;">]#</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[root@k8s-master-1 </span><span style="color:#D73A49;">~</span><span style="color:#24292E;">]# yum --disablerepo=</span><span style="color:#005CC5;">\\*</span><span style="color:#24292E;"> --enablerepo=elrepo-kernel list kernel</span><span style="color:#D73A49;">*</span></span>
<span class="line"><span style="color:#6F42C1;">Installed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Packages</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.x86_64</span><span style="color:#24292E;">                                                              </span><span style="color:#005CC5;">3.10</span><span style="color:#032F62;">.0-1160.el7</span><span style="color:#24292E;">                                               </span><span style="color:#032F62;">@anaconda</span><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#6F42C1;">kernel.x86_64</span><span style="color:#24292E;">                                                              </span><span style="color:#005CC5;">3.10</span><span style="color:#032F62;">.0-1160.88.1.el7</span><span style="color:#24292E;">                                          </span><span style="color:#032F62;">@updates</span><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-devel.x86_64</span><span style="color:#24292E;">                                                        </span><span style="color:#005CC5;">3.10</span><span style="color:#032F62;">.0-1160.88.1.el7</span><span style="color:#24292E;">                                          </span><span style="color:#032F62;">@updates</span><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-headers.x86_64</span><span style="color:#24292E;">                                                      </span><span style="color:#005CC5;">3.10</span><span style="color:#032F62;">.0-1160.88.1.el7</span><span style="color:#24292E;">                                          </span><span style="color:#032F62;">@updates</span><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-tools.x86_64</span><span style="color:#24292E;">                                                        </span><span style="color:#005CC5;">3.10</span><span style="color:#032F62;">.0-1160.88.1.el7</span><span style="color:#24292E;">                                          </span><span style="color:#032F62;">@updates</span><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-tools-libs.x86_64</span><span style="color:#24292E;">                                                   </span><span style="color:#005CC5;">3.10</span><span style="color:#032F62;">.0-1160.88.1.el7</span><span style="color:#24292E;">                                          </span><span style="color:#032F62;">@updates</span><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#6F42C1;">Available</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Packages</span></span>
<span class="line"><span style="color:#6F42C1;">kernel-lt-devel.x86_64</span><span style="color:#24292E;">                                                     </span><span style="color:#005CC5;">5.4</span><span style="color:#032F62;">.256-1.el7.elrepo</span><span style="color:#24292E;">                                          </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-lt-doc.noarch</span><span style="color:#24292E;">                                                       </span><span style="color:#005CC5;">5.4</span><span style="color:#032F62;">.256-1.el7.elrepo</span><span style="color:#24292E;">                                          </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-lt-headers.x86_64</span><span style="color:#24292E;">                                                   </span><span style="color:#005CC5;">5.4</span><span style="color:#032F62;">.256-1.el7.elrepo</span><span style="color:#24292E;">                                          </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-lt-tools.x86_64</span><span style="color:#24292E;">                                                     </span><span style="color:#005CC5;">5.4</span><span style="color:#032F62;">.256-1.el7.elrepo</span><span style="color:#24292E;">                                          </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-lt-tools-libs.x86_64</span><span style="color:#24292E;">                                                </span><span style="color:#005CC5;">5.4</span><span style="color:#032F62;">.256-1.el7.elrepo</span><span style="color:#24292E;">                                          </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-lt-tools-libs-devel.x86_64</span><span style="color:#24292E;">                                          </span><span style="color:#005CC5;">5.4</span><span style="color:#032F62;">.256-1.el7.elrepo</span><span style="color:#24292E;">                                          </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-ml.x86_64</span><span style="color:#24292E;">                                                           </span><span style="color:#005CC5;">6.5</span><span style="color:#032F62;">.1-1.el7.elrepo</span><span style="color:#24292E;">                                            </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-ml-devel.x86_64</span><span style="color:#24292E;">                                                     </span><span style="color:#005CC5;">6.5</span><span style="color:#032F62;">.1-1.el7.elrepo</span><span style="color:#24292E;">                                            </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-ml-doc.noarch</span><span style="color:#24292E;">                                                       </span><span style="color:#005CC5;">6.5</span><span style="color:#032F62;">.1-1.el7.elrepo</span><span style="color:#24292E;">                                            </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-ml-headers.x86_64</span><span style="color:#24292E;">                                                   </span><span style="color:#005CC5;">6.5</span><span style="color:#032F62;">.1-1.el7.elrepo</span><span style="color:#24292E;">                                            </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-ml-tools.x86_64</span><span style="color:#24292E;">                                                     </span><span style="color:#005CC5;">6.5</span><span style="color:#032F62;">.1-1.el7.elrepo</span><span style="color:#24292E;">                                            </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-ml-tools-libs.x86_64</span><span style="color:#24292E;">                                                </span><span style="color:#005CC5;">6.5</span><span style="color:#032F62;">.1-1.el7.elrepo</span><span style="color:#24292E;">                                            </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">kernel-ml-tools-libs-devel.x86_64</span><span style="color:#24292E;">                                          </span><span style="color:#005CC5;">6.5</span><span style="color:#032F62;">.1-1.el7.elrepo</span><span style="color:#24292E;">                                            </span><span style="color:#032F62;">elrepo-kernel</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">[root@k8s-master-1 </span><span style="color:#D73A49;">~</span><span style="color:#24292E;">]#</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><ul><li>lt: long time support, 长期支持版</li><li>ml: mainline, 主线版本</li></ul></div><h2 id="安装新版本内核" tabindex="-1">安装新版本内核 <a class="header-anchor" href="#安装新版本内核" aria-label="Permalink to &quot;安装新版本内核&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--enablerepo=elrepo-kernel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel-lt</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--enablerepo=elrepo-kernel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel-lt</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><h2 id="删除旧版本工具包" tabindex="-1">删除旧版本工具包 <a class="header-anchor" href="#删除旧版本工具包" aria-label="Permalink to &quot;删除旧版本工具包&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remove</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel-headers</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel-tools</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel-tools-libs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remove</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel-headers</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel-tools</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel-tools-libs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><h2 id="安装新版本工具包" tabindex="-1">安装新版本工具包 <a class="header-anchor" href="#安装新版本工具包" aria-label="Permalink to &quot;安装新版本工具包&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--disablerepo=\\*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--enablerepo=elrepo-kernel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel-lt-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel-lt-headers</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel-lt-tools</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel-lt-tools-libs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--disablerepo=\\*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--enablerepo=elrepo-kernel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel-lt-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel-lt-headers</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel-lt-tools</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel-lt-tools-libs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><h2 id="查看内核插入顺序" tabindex="-1">查看内核插入顺序 <a class="header-anchor" href="#查看内核插入顺序" aria-label="Permalink to &quot;查看内核插入顺序&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;$1==&quot;menuentry &quot; {print i++ &quot; : &quot; $2}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/grub2.cfg</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;$1==&quot;menuentry &quot; {print i++ &quot; : &quot; $2}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/grub2.cfg</span></span></code></pre></div><h2 id="重新启动服务器" tabindex="-1">重新启动服务器 <a class="header-anchor" href="#重新启动服务器" aria-label="Permalink to &quot;重新启动服务器&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">reboot</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">reboot</span></span></code></pre></div><h2 id="卸载老的内核" tabindex="-1">卸载老的内核 <a class="header-anchor" href="#卸载老的内核" aria-label="Permalink to &quot;卸载老的内核&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remove</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remove</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div>`,23),o=[p];function r(t,c,y,E,F,i){return l(),a("div",null,o)}const h=s(e,[["render",r]]);export{C as __pageData,h as default};